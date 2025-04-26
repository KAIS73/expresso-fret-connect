// script.js funzionante
document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            tabButtons.forEach(b => b.classList.remove('active'));
            tabContents.forEach(tc => tc.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(btn.getAttribute('data-tab')).classList.add('active');
        });
    });

    const payerBtn = document.querySelector('.payment-actions .btn-primary');
    const cancelBtn = document.querySelector('.payment-actions .btn-secondary');
    const paymentModal = document.querySelector('.payment-modal');

    if (payerBtn && paymentModal) {
        payerBtn.addEventListener('click', () => {
            payerBtn.textContent = 'Paiement réussi ✔️';
            setTimeout(() => {
                paymentModal.style.display = 'none';
                payerBtn.textContent = 'Payer maintenant';
            }, 1500);
        });
    }

    if (cancelBtn && paymentModal) {
        cancelBtn.addEventListener('click', () => {
            paymentModal.style.display = 'none';
        });
    }
});
