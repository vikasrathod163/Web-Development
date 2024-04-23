
        angular.module('inventoryApp', [])
            .controller('InventoryController', function () {
                this.items = [
                    { name: 'Laptop', quantity: 10 },
                    { name: 'Phone', quantity: 20 },
                    { name: 'Tablet', quantity: 15 }
                ];

                this.newItem = {};
                this.editMode = false;
                this.selectedItem = {};

                this.addItem = function () {
                    this.items.push({
                        name: this.newItem.name,
                        quantity: this.newItem.quantity
                    });
                    this.newItem = {};
                };

                this.removeItem = function (index) {
                    this.items.splice(index, 1);
                };

                this.editItem = function (index) {
                    this.editMode = true;
                    this.selectedItem = angular.copy(this.items[index]);
                    this.editIndex = index;
                };

                this.updateItem = function () {
                    this.items[this.editIndex] = this.selectedItem;
                    this.cancelEdit();
                };

                this.cancelEdit = function () {
                    this.editMode = false;
                    this.selectedItem = {};
                    this.editIndex = null;
                };
            });
    