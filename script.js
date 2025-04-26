// Script base per tabs, chat e modale pagamento
document.addEventListener('DOMContentLoaded', () => {
    // Gestion des tabs (expéditeur/transporteur)
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

    // Gestion de la chat-container (ouvrir/fermer)
    const chatHeader = document.querySelector('.chat-header');
    const chatBody = document.querySelector('.chat-body');
    if (chatHeader && chatBody) {
        chatHeader.addEventListener('click', () => {
            chatBody.classList.toggle('hidden');
        });
    }

    // Gestion de la payment-modal
    const paymentModal = document.querySelector('.payment-modal');
    const payerBtn = document.querySelector('.payment-actions .btn-primary');
    const cancelBtn = document.querySelector('.payment-actions .btn-secondary');

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
