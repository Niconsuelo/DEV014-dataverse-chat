export const button = (text) => {
    const btn = document.createElement('button');
    btn.innerHTML = text;
    btn.addEventListener('click', function(){

    });
    return btn;
}