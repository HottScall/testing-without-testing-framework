(function (exports) {
    var EXCLAMATION_MARK_COUNT = 5

    function exclaim(string) {
        return string + "!".repeat(EXCLAMATION_MARK_COUNT);
    };

  function exclaimTwo(string) {
        return string + "!?".repeat(EXCLAMATION_MARK_COUNT);
    };
    exports.exclaimTwo = exclaimTwo; }) (this);
