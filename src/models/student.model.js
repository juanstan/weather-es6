var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.getFirstName = function () {
        return this.firstName;
    };
    Student.prototype.getMiddleInitial = function () {
        return this.middleInitial;
    };
    Student.prototype.getLastName = function () {
        return this.lastName;
    };
    Student.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    Student.prototype.setMiddleInitial = function (middleInitial) {
        this.lastName = middleInitial;
    };
    Student.prototype.setLastName = function (lastName) {
        this.lastName = lastName;
    };
    return Student;
}());
export { Student };
//# sourceMappingURL=student.model.js.map