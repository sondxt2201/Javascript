function toast({
    title = '',
    message = '',
    type = '',
    duration = NaN }) {
    const main = document.getElementById('toast');
    if (main) {
        const toast = document.createElement('div');
        const icon = {
            success: '<i class="fa fa-check-circle"></i>',
            info: '<i class="fa fa-check-circle"></i>',
            warning: '<i class="fa-solid fa-circle-exclamation"></i>',
            error: '<i class="fa-solid fa-circle-exclamation"></i>',
        }
        const icons = icon[type];
        const delay = (duration / 1000).toFixed(2);


        const autoRemoveId = setTimeout(function () {
            main.removeChild(toast);
        }, duration);
        
        toast.onclick = function (e) {
            if (e.target.closest('.toast__close')) {
                main.removeChild(toast);
                clearTimeout(autoRemoveId);
            }
        }

        toast.classList.add(`toast`, `toast--${type}`);
        toast.style.animation = `slideInLeft ease-in 0.3s, fadeOut linear 1s ${delay}s forwards`;
        // console.log(icons);
        toast.innerHTML = `
            <div class="toast__icon">
            ${icons}
            </div>
            <div class="toast__body">
            <h3 class="toast__title">${title}</h3>
            <p class="toast__msg">${message}</p>
            </div>
            <div class="toast__close">
            <i class="fa fa-times-circle"></i>
            </div>
            `;
        main.appendChild(toast);
        

    }
};



function showSuccessToast() {
    toast({
        title: 'Success!',
        message: 'Kết nối thành công',
        type: 'success',
        duration: 5000,
    });
};

function showErrorToast() {
    toast({
        title: 'Error!',
        message: 'Kết nối thất bại',
        type: 'error',
        duration: 5000,
    });
}