package java_code;

public class BestTimeToBuy {
    public int maxProfit(int[] prices) {
        int profit = 0; // ① beneficio total acumulado
        for (int i = 1; i < prices.length; i++) { // ② recorremos desde el segundo día
            if (prices[i] > prices[i - 1]) { // ③ ¿subió el precio respecto al día anterior?
                profit += prices[i] - prices[i - 1]; // ④ si subió, “compramos ayer y vendemos hoy”
            }
        }
        return profit; // ⑤ devolvemos el beneficio máximo
    }
}
