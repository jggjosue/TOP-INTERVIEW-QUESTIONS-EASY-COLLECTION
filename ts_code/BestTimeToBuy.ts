class BestTimeToBuy {
    public maxProfit(prices: number[]): number {
        let profit = 0; // ① beneficio total acumulado

        for (let i = 1; i < prices.length; i++) { // ② recorremos desde el segundo día
            if (prices[i] > prices[i - 1]) { // ③ ¿subió el precio respecto al día anterior?
                profit += prices[i] - prices[i - 1]; // ④ si subió, “compramos ayer y vendemos hoy”
            }
        }

        return profit; // ⑤ devolvemos el beneficio máximo
    }
}

// Ejemplo de uso:
const solution = new BestTimeToBuy();
const prices = [7, 1, 5, 3, 6, 4];
console.log("Máximo beneficio:", solution.maxProfit(prices));