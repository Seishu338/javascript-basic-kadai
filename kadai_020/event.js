const btn = document.getElementById('btn');
btn.addEventListener('click', () =>{
    const Text = document.getElementById('text');
    Text.style.display = 'none';
    const H2 = document.createElement('h2');
    H2.textContent = 'ボタンをクリックしました';
    document.querySelector('body').insertBefore(H2,btn);
})