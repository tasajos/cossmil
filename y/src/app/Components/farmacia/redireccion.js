document.getElementById('home-tab').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('home').classList.add('show', 'active');
    document.getElementById('profile').classList.remove('show', 'active');
    document.getElementById('messages').classList.remove('show', 'active');
    document.getElementById('settings').classList.remove('show', 'active');
});

document.getElementById('profile-tab').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('home').classList.remove('show', 'active');
    document.getElementById('profile').classList.add('show', 'active');
    document.getElementById('messages').classList.remove('show', 'active');
    document.getElementById('settings').classList.remove('show', 'active');
});

document.getElementById('messages-tab').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('home').classList.remove('show', 'active');
    document.getElementById('profile').classList.remove('show', 'active');
    document.getElementById('messages').classList.add('show', 'active');
    document.getElementById('settings').classList.remove('show', 'active');
});

document.getElementById('settings-tab').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('home').classList.remove('show', 'active');
    document.getElementById('profile').classList.remove('show', 'active');
    document.getElementById('messages').classList.remove('show', 'active');
    document.getElementById('settings').classList.add('show', 'active');
});
