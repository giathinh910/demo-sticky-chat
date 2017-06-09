app.service('AppStorage', function() {
    var keyNames = {
        token: 'token',
        userEmail: 'userEmail',
        userDisplayName: 'userDisplayName',
        userSite: 'userSite',
        userRoom: 'userRoom'
    };

    this.setToken = function(token) {
        localStorage.setItem(keyNames.token, token);
    };

    this.getToken = function() {
        return localStorage.getItem(keyNames.token);
    };

    this.setUserEmail = function(email) {
        localStorage.setItem(keyNames.userEmail, email);
    };

    this.getUserEmail = function() {
        return localStorage.getItem(keyNames.userEmail);
    };

    this.setDisplayName = function(displayName) {
        localStorage.setItem(keyNames.userDisplayName, displayName);
    };

    this.getDisplayName = function() {
        return localStorage.getItem(keyNames.userDisplayName);
    };

    this.setSite = function(site) {
        localStorage.setItem(keyNames.userSite, site);
    };

    this.getSite = function() {
        return localStorage.getItem(keyNames.userSite);
    };

    this.setRoom = function(room) {
        localStorage.setItem(keyNames.userRoom, room);
    };

    this.getRoom = function() {
        return localStorage.getItem(keyNames.userRoom);
    };

    this.setOnLogin = function(user) {
        this.setToken(user.token);
        this.setUserEmail(user.email);
        this.setDisplayName(user.displayName);
        this.setSite(user.site);
        this.setRoom(user.room);
    };

    this.reset = function() {
        localStorage.clear();
    }
});