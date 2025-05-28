class BestTimeToBuy:
    def maxProfit(self, prices):
        profit = 0  # ① beneficio total acumulado

        for i in range(1, len(prices)):  # ② recorremos desde el segundo día
            if prices[i] > prices[i - 1]:  # ③ ¿subió el precio respecto al día anterior?
                profit += prices[i] - prices[i - 1]  # ④ si subió, “compramos ayer y vendemos hoy”

        return profit  # ⑤ devolvemos el beneficio máximo

# Ejemplo de uso:
solution = BestTimeToBuy ()
prices = [7, 1, 5, 3, 6, 4]
print("Máximo beneficio:", solution.maxProfit(prices))
