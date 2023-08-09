export const transformMoney = (money: number): string => {
    const formatedMoney = money.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return formatedMoney;
}