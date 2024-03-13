const priceMonthlySpans = document.querySelectorAll('.price-monthly');
const priceAnnuallySpans = document.querySelectorAll('.price-annually');
const switchPrices = document.getElementsByTagName('input')[0];

switchPrices.addEventListener("click", () => {
    priceMonthlySpans.forEach(span => {
        span.classList.toggle("hidden");
    });
    priceAnnuallySpans.forEach(span => {
        span.classList.toggle("hidden");
    });
});