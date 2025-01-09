export const years = [2022, 2023, 2024, 2025] as const;
export type Year = (typeof years)[number];

export const batteryData = {
  2022: [
    { month: "Jan", capacity: 100, cycles: 0, efficiency: 95, temperature: 25, chargeRate: 90 },
    { month: "Feb", capacity: 98.3, cycles: 10, efficiency: 94.2, temperature: 26, chargeRate: 88 },
    { month: "Mar", capacity: 96.7, cycles: 20, efficiency: 93.9, temperature: 24, chargeRate: 87 },
    { month: "Apr", capacity: 95, cycles: 30, efficiency: 93.5, temperature: 25, chargeRate: 85 },
    { month: "May", capacity: 94, cycles: 40, efficiency: 93, temperature: 26, chargeRate: 84 },
    { month: "Jun", capacity: 93, cycles: 50, efficiency: 92, temperature: 27, chargeRate: 83 },
    { month: "Jul", capacity: 92, cycles: 60, efficiency: 91, temperature: 28, chargeRate: 82 },
    { month: "Aug", capacity: 91, cycles: 70, efficiency: 90, temperature: 29, chargeRate: 81 },
    { month: "Sep", capacity: 90, cycles: 80, efficiency: 89, temperature: 28, chargeRate: 80 },
    { month: "Oct", capacity: 89, cycles: 90, efficiency: 88, temperature: 27, chargeRate: 79 },
    { month: "Nov", capacity: 88, cycles: 100, efficiency: 87, temperature: 26, chargeRate: 78 },
    { month: "Dec", capacity: 87, cycles: 110, efficiency: 86, temperature: 25, chargeRate: 77 },
  ],
  2023: [
    { month: "Jan", capacity: 98.3, cycles: 120, efficiency: 94.2, temperature: 26, chargeRate: 88 },
    { month: "Feb", capacity: 97.5, cycles: 130, efficiency: 93.8, temperature: 27, chargeRate: 87 },
    { month: "Mar", capacity: 96.8, cycles: 140, efficiency: 93.5, temperature: 25, chargeRate: 86 },
    { month: "Apr", capacity: 95.2, cycles: 150, efficiency: 93.0, temperature: 26, chargeRate: 85 },
    { month: "May", capacity: 94.0, cycles: 160, efficiency: 92.5, temperature: 27, chargeRate: 84 },
    { month: "Jun", capacity: 93.0, cycles: 170, efficiency: 92.0, temperature: 28, chargeRate: 83 },
    { month: "Jul", capacity: 92.0, cycles: 180, efficiency: 91.5, temperature: 29, chargeRate: 82 },
    { month: "Aug", capacity: 91.0, cycles: 190, efficiency: 91.0, temperature: 30, chargeRate: 81 },
    { month: "Sep", capacity: 90.0, cycles: 200, efficiency: 90.5, temperature: 29, chargeRate: 80 },
    { month: "Oct", capacity: 89.0, cycles: 210, efficiency: 90.0, temperature: 28, chargeRate: 79 },
    { month: "Nov", capacity: 88.0, cycles: 220, efficiency: 89.5, temperature: 27, chargeRate: 78 },
    { month: "Dec", capacity: 87.0, cycles: 230, efficiency: 89.0, temperature: 26, chargeRate: 77 },
  ],
  2024: [
    { month: "Jan", capacity: 96.7, cycles: 240, efficiency: 93.9, temperature: 24, chargeRate: 87 },
    { month: "Feb", capacity: 95.5, cycles: 250, efficiency: 93.5, temperature: 25, chargeRate: 86 },
    { month: "Mar", capacity: 94.0, cycles: 260, efficiency: 93.0, temperature: 26, chargeRate: 85 },
    { month: "Apr", capacity: 92.5, cycles: 270, efficiency: 92.5, temperature: 27, chargeRate: 84 },
    { month: "May", capacity: 91.0, cycles: 280, efficiency: 92.0, temperature: 28, chargeRate: 83 },
    { month: "Jun", capacity: 90.0, cycles: 290, efficiency: 91.5, temperature: 29, chargeRate: 82 },
    { month: "Jul", capacity: 89.0, cycles: 300, efficiency: 91.0, temperature: 30, chargeRate: 81 },
    { month: "Aug", capacity: 88.0, cycles: 310, efficiency: 90.5, temperature: 29, chargeRate: 80 },
    { month: "Sep", capacity: 87.0, cycles: 320, efficiency: 90.0, temperature: 28, chargeRate: 79 },
    { month: "Oct", capacity: 86.0, cycles: 330, efficiency: 89.5, temperature: 27, chargeRate: 78 },
    { month: "Nov", capacity: 85.0, cycles: 340, efficiency: 89.0, temperature: 26, chargeRate: 77 },
    { month: "Dec", capacity: 84.0, cycles: 350, efficiency: 88.5, temperature: 25, chargeRate: 76 },
  ],
  2025: [] // Ready to receive 2025 data
};

export const energyData = {
  2022: [
    { month: "Jan", production: 420, consumption: 350, heatPump: 300 },
    { month: "Feb", production: 450, consumption: 380, heatPump: 320 },
    { month: "Mar", production: 480, consumption: 410, heatPump: 340 },
    { month: "Apr", production: 500, consumption: 430, heatPump: 360 },
    { month: "May", production: 520, consumption: 450, heatPump: 380 },
    { month: "Jun", production: 540, consumption: 470, heatPump: 400 },
    { month: "Jul", production: 560, consumption: 490, heatPump: 420 },
    { month: "Aug", production: 580, consumption: 510, heatPump: 440 },
    { month: "Sep", production: 600, consumption: 530, heatPump: 460 },
    { month: "Oct", production: 620, consumption: 550, heatPump: 480 },
    { month: "Nov", production: 640, consumption: 570, heatPump: 500 },
    { month: "Dec", production: 660, consumption: 590, heatPump: 520 },
  ],
  2023: [
    { month: "Jan", production: 450, consumption: 380, heatPump: 320 },
    { month: "Feb", production: 480, consumption: 410, heatPump: 340 },
    { month: "Mar", production: 500, consumption: 430, heatPump: 360 },
    { month: "Apr", production: 520, consumption: 450, heatPump: 380 },
    { month: "May", production: 540, consumption: 470, heatPump: 400 },
    { month: "Jun", production: 560, consumption: 490, heatPump: 420 },
    { month: "Jul", production: 580, consumption: 510, heatPump: 440 },
    { month: "Aug", production: 600, consumption: 530, heatPump: 460 },
    { month: "Sep", production: 620, consumption: 550, heatPump: 480 },
    { month: "Oct", production: 640, consumption: 570, heatPump: 500 },
    { month: "Nov", production: 660, consumption: 590, heatPump: 520 },
    { month: "Dec", production: 680, consumption: 610, heatPump: 540 },
  ],
  2024: [
    { month: "Jan", production: 480, consumption: 410, heatPump: 340 },
    { month: "Feb", production: 500, consumption: 430, heatPump: 360 },
    { month: "Mar", production: 520, consumption: 450, heatPump: 380 },
    { month: "Apr", production: 540, consumption: 470, heatPump: 400 },
    { month: "May", production: 560, consumption: 490, heatPump: 420 },
    { month: "Jun", production: 580, consumption: 510, heatPump: 440 },
    { month: "Jul", production: 600, consumption: 530, heatPump: 460 },
    { month: "Aug", production: 620, consumption: 550, heatPump: 480 },
    { month: "Sep", production: 640, consumption: 570, heatPump: 500 },
    { month: "Oct", production: 660, consumption: 590, heatPump: 520 },
    { month: "Nov", production: 680, consumption: 610, heatPump: 540 },
    { month: "Dec", production: 700, consumption: 630, heatPump: 560 },
  ],
  2025: [] // Ready to receive 2025 data
};
