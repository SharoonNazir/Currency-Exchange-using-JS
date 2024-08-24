 function toggleMenu() {
            const sidebar = document.querySelector('.sidebar-menu');
            sidebar.classList.toggle('open');

            const cont = document.querySelector('.landContent');
            cont.classList.toggle('landContentChange');

const ham=document.querySelector('.hamburger');
ham.classList.toggle('landContentChange');

const hChange=document.querySelector('.landingChange');
hChange.classList.toggle('landContentChange');


const buttonpos=document.querySelector('.butpos');
buttonpos.classList.toggle('butposChange');

        }

    


// -------------------------------------------------------------


const exampleModal = document.getElementById('exampleModal')
exampleModal.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
  const button = event.relatedTarget
  // Extract info from data-bs-* attributes
  const recipient = button.getAttribute('data-bs-whatever')
  
  // Update the modal's input fields
  const modalTitle = exampleModal.querySelector('.modal-title')
  const recipientInput = exampleModal.querySelector('#recipient-name')
  
  modalTitle.textContent = 'New message'  // Set a default title or customize
  recipientInput.value = ''  // Clear the input field when the modal opens
})