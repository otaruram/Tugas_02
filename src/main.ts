// Interface untuk response API Open-Meteo
interface WeatherResponse {
    hourly: {
        time: string[];
        temperature_2m: number[];
    };
}

// Interface untuk data cuaca yang akan ditampilkan
interface WeatherData {
    time: string;
    temperature: number;
}

class WeatherApp {
    // Gunakan CORS proxy untuk production, direct API untuk development
    private readonly apiUrl = window.location.hostname === 'localhost' 
        ? 'https://api.open-meteo.com/v1/forecast?latitude=-6.2&longitude=106.8&hourly=temperature_2m'
        : 'https://cors-anywhere.herokuapp.com/https://api.open-meteo.com/v1/forecast?latitude=-6.2&longitude=106.8&hourly=temperature_2m';
    
    private readonly fallbackApiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=-6.2&longitude=106.8&hourly=temperature_2m';
    private readonly tableBody: HTMLElement;
    private readonly statusElement: HTMLElement;
    private readonly refreshButton: HTMLElement;

    constructor() {
        this.tableBody = document.getElementById('weather-data') as HTMLElement;
        this.statusElement = document.getElementById('status') as HTMLElement;
        this.refreshButton = document.getElementById('refresh-btn') as HTMLElement;
        
        this.init();
    }

    private init(): void {
        this.refreshButton.addEventListener('click', () => this.fetchWeatherData());
        this.fetchWeatherData(); // Load data saat pertama kali
    }

    private async fetchWeatherData(): Promise<void> {
        try {
            this.updateStatus('MENGAMBIL DATA...');
            this.refreshButton.textContent = 'LOADING...';
            
            // Coba dengan URL utama dulu
            let response = await this.tryFetch(this.apiUrl);
            
            // Jika gagal, coba dengan fallback
            if (!response) {
                console.log('Primary API failed, trying fallback...');
                this.updateStatus('MENCOBA ALTERNATIF...');
                response = await this.tryFetch(this.fallbackApiUrl);
            }
            
            // Jika semua API gagal, gunakan mock data
            if (!response) {
                console.log('All APIs failed, using mock data...');
                this.updateStatus('MENGGUNAKAN DATA DEMO...');
                const mockData = this.generateMockData();
                this.displayWeatherData(mockData);
                this.updateStatus('DATA DEMO DIMUAT (API TIDAK TERSEDIA)');
                return;
            }
            
            const data: WeatherResponse = await response.json();
            this.displayWeatherData(data);
            this.updateStatus('DATA BERHASIL DIMUAT');
            
        } catch (error) {
            console.error('Error fetching weather data:', error);
            this.updateStatus('ERROR: GAGAL MENGAMBIL DATA');
            this.displayError();
        } finally {
            this.refreshButton.textContent = 'REFRESH DATA';
        }
    }

    private async tryFetch(url: string): Promise<Response | null> {
        try {
            console.log('Trying to fetch from:', url);
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                },
                mode: 'cors' // Explicitly set CORS mode
            });
            
            if (!response.ok) {
                console.log(`HTTP ${response.status}: ${response.statusText}`);
                return null;
            }
            
            return response;
        } catch (error) {
            console.error('Fetch error:', error);
            return null;
        }
    }

    private displayWeatherData(data: WeatherResponse): void {
        const weatherData: WeatherData[] = data.hourly.time.map((time, index) => ({
            time: this.formatDateTime(time),
            temperature: data.hourly.temperature_2m[index]
        }));

        // Ambil 24 jam ke depan saja
        const next24Hours = weatherData.slice(0, 24);
        
        this.tableBody.innerHTML = '';
        
        next24Hours.forEach(item => {
            const row = this.createTableRow(item);
            this.tableBody.appendChild(row);
        });
    }

    private createTableRow(data: WeatherData): HTMLTableRowElement {
        const row = document.createElement('tr');
        row.className = 'data-row';
        
        const timeCell = document.createElement('td');
        timeCell.textContent = data.time;
        timeCell.className = 'time-cell';
        
        const tempCell = document.createElement('td');
        tempCell.textContent = `${data.temperature.toFixed(1)}°`;
        tempCell.className = 'temp-cell';
        
        // Tambahkan class untuk styling berdasarkan suhu
        if (data.temperature > 30) {
            tempCell.classList.add('hot');
        } else if (data.temperature < 20) {
            tempCell.classList.add('cool');
        }
        
        row.appendChild(timeCell);
        row.appendChild(tempCell);
        
        return row;
    }

    private formatDateTime(isoString: string): string {
        const date = new Date(isoString);
        const options: Intl.DateTimeFormatOptions = {
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        };
        
        return date.toLocaleString('id-ID', options).replace(',', ' //');
    }

    private generateMockData(): WeatherResponse {
        const now = new Date();
        const times: string[] = [];
        const temperatures: number[] = [];
        
        // Generate 24 hours of mock data
        for (let i = 0; i < 24; i++) {
            const time = new Date(now.getTime() + (i * 60 * 60 * 1000));
            times.push(time.toISOString());
            // Jakarta temperature range: 24-32°C with realistic variation
            const baseTemp = 27 + Math.sin(i * Math.PI / 12) * 3; // Day/night cycle
            const randomVariation = (Math.random() - 0.5) * 2;
            temperatures.push(Math.round((baseTemp + randomVariation) * 10) / 10);
        }
        
        return {
            hourly: {
                time: times,
                temperature_2m: temperatures
            }
        };
    }

    private updateStatus(message: string): void {
        this.statusElement.textContent = message;
    }

    private displayError(): void {
        this.tableBody.innerHTML = `
            <tr class="error-row">
                <td colspan="2">
                    GAGAL MEMUAT DATA<br>
                    PERIKSA KONEKSI INTERNET
                </td>
            </tr>
        `;
    }
}

// Inisialisasi aplikasi setelah DOM loaded
document.addEventListener('DOMContentLoaded', () => {
    new WeatherApp();
});