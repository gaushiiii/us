document.getElementById('yesButton').addEventListener('click', function() {
    document.querySelector('.container').classList.add('hidden');
    document.getElementById('message').classList.remove('hidden');
});

document.getElementById('noButton').addEventListener('click', function() {
    document.querySelector('.container').classList.add('hidden');
    document.getElementById('noMessage').classList.remove('hidden');
    setTimeout(function() {
        document.querySelector('.container').classList.remove('hidden');
        document.getElementById('noMessage').classList.add('hidden');
    }, 3000);
});
