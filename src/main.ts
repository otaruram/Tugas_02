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
    private readonly apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=-6.2&longitude=106.8&hourly=temperature_2m';
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
            
            const response = await fetch(this.apiUrl);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
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