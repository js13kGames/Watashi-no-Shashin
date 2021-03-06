//key down events
(function() {
    var pressedKeys = {};
    var keyUpevent;
    
    function setKey(event, status) {
        var code = event.keyCode;
        var key;

        switch(code) {
        case 13:
            key = 'RET'; break;
        case 27:
            key = 'ESC'; break;                
        case 32:
            key = 'SPACE'; break;
        case 37:
            key = 'LEFT'; break;
        case 38:
            key = 'UP'; break;
        case 39:
            key = 'RIGHT'; break;
        case 40:
            key = 'DOWN'; break;
        default:
            // Convert ASCII codes to letters
            key = String.fromCharCode(code);
        }

        pressedKeys[key] = status;
        return key;
    }

    document.addEventListener('keydown', function(e) {
        setKey(e, true);
    });

    document.addEventListener('keyup', function(e) {
        var k = setKey(e, false);
        if (keyUpevent) {
            keyUpevent(k);
        }
    });

    window.addEventListener('blur', function() {
        pressedKeys = {};
    });

    window.input = {
        onKeyUp: function (handler) {
            keyUpevent = handler;
        },
        isDown: function(key) {
            return pressedKeys[key.toUpperCase()];
        }
    };
})();