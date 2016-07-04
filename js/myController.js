var app = angular.module('myForm', []);
app.controller("myController",function ($scope) {
    $scope.status = "edit";
    $scope.hasPopUpBox = false;
    $scope.statusBtnContent = $scope.status == "edit" ? "预览" :"编辑";
    $scope.items = [];

    $scope.changeStatus = function () {
        $scope.status = $scope.status == "edit" ? "preview" :"edit";
        $scope.statusBtnContent = $scope.status == "edit" ? "预览" :"编辑";
        // console.log($scope.status);
    };

    $scope.openPopUpBox = function () {
        $scope.hasPopUpBox = true;
    };

    $scope.closePopUpBox = function () {
        $scope.hasPopUpBox = false;
    };

    $scope.addItem = function () {
        // alert(123456789)
        var addItemType = $('input[name="input-type"]:checked').val();
        var addItemId = parseInt((new Date()).getTime());
        var addItemText = addItemType == "text" ? "我是文本"+addItemId :"我是日期"+addItemId;
        var addItem = {"type":addItemType,"id":addItemId,"text":addItemText};
        $scope.items.push(addItem);
    };
    $scope.removeItem = function (index) {
        for(var i in $scope.items){
            if($scope.items[i]["id"] == index){
                $scope.items.splice(i,1);
                break;
            }
        }
    }
})