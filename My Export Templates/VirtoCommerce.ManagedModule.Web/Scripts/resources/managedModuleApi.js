angular.module('VirtoCommerce.ManagedModule')
    .factory('managedModuleApi', ['$resource', function ($resource) {
        return $resource('api/managedModule');
    }]);