// Service selection from cards
document.querySelectorAll('.select-service').forEach(btn => {
  btn.addEventListener('click', function () {
    const card = this.closest('.service-card');
    const service = card.dataset.service;
    const select = document.getElementById('service');

    // Map card data to select options
    const mapping = {
      laundry: 'laundry',
      technician: 'electrician',
      cleaning: 'cleaning',
      furniture: 'furniture',
      garden: 'garden',
      other: 'other'
    };

    if (mapping[service]) {
      select.value = mapping[service];
    }

    // Scroll to form
    document.getElementById('request').scrollIntoView({ behavior: 'smooth' });
  });
});

// Form submission
const form = document.getElementById('requestForm');
const modal = document.getElementById('successModal');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Simple validation already handled by HTML required
  const formData = {
    service: document.getElementById('service').value,
    name: document.getElementById('name').value.trim(),
    phone: document.getElementById('phone').value.trim(),
    address: document.getElementById('address').value.trim(),
    description: document.getElementById('description').value.trim()
  };

  // Here you can later connect to email, Telegram, WhatsApp or backend
  console.log('New request:', formData);

  // Show success modal
  modal.classList.add('active');

  // Reset form
  form.reset();
});

function closeModal() {
  modal.classList.remove('active');
}

// Close modal on background click
modal.addEventListener('click', function (e) {
  if (e.target === modal) {
    closeModal();
  }
});

// Mobile menu (simple toggle for future expansion)
const mobileBtn = document.querySelector('.mobile-menu-btn');
if (mobileBtn) {
  mobileBtn.addEventListener('click', () => {
    alert('მობილური მენიუ მალე დაემატება. გამოიყენეთ სერვისების სექცია ან ფორმა.');
  });
}
