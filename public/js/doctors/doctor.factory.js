"use strict";

(function() {
    angular
        .module("DocCheapoz")
        .factory("DoctorFactory", [
            "$resource",
            DoctorFactoryFunction
        ]);

    function DoctorFactoryFunction($resource) {
        return $resource("http://localhost:3030/api/doctors/:name", {}, {
            update: {
                method: "PUT"
            }
        });
    }
})();
