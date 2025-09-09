/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

var teacher3 = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};
console.log(teacher3);
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);
var printTeacher = function (firstName, lastName) {
    var first = firstName.charAt(0);
    return "".concat(first, ". ").concat(lastName);
};
console.log(printTeacher("John", "Doe"));
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQVVBLElBQU0sUUFBUSxHQUFZO0lBQ3hCLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLGdCQUFnQixFQUFFLEtBQUs7SUFDdkIsUUFBUSxFQUFFLEtBQUs7SUFDZixRQUFRLEVBQUUsUUFBUTtJQUNsQixRQUFRLEVBQUUsS0FBSztDQUNoQixDQUFDO0FBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQU10QixJQUFNLFNBQVMsR0FBYztJQUMzQixTQUFTLEVBQUUsTUFBTTtJQUNqQixRQUFRLEVBQUUsS0FBSztJQUNmLFFBQVEsRUFBRSxRQUFRO0lBQ2xCLGdCQUFnQixFQUFFLElBQUk7SUFDdEIsZUFBZSxFQUFFLEVBQUU7Q0FDcEIsQ0FBQztBQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7QUFNdkIsSUFBTSxZQUFZLEdBQXlCLFVBQVUsU0FBaUIsRUFBRSxRQUFnQjtJQUN0RixJQUFNLEtBQUssR0FBVyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFDLE9BQU8sVUFBRyxLQUFLLGVBQUssUUFBUSxDQUFFLENBQUM7QUFDakMsQ0FBQztBQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBY3pDO0lBQ0Usc0JBQW1CLFNBQWlCLEVBQVMsUUFBZ0I7UUFBMUMsY0FBUyxHQUFULFNBQVMsQ0FBUTtRQUFTLGFBQVEsR0FBUixRQUFRLENBQVE7SUFBSSxDQUFDO0lBQ2xFLHFDQUFjLEdBQWQ7UUFDRSxPQUFPLG1CQUFtQixDQUFDO0lBQzdCLENBQUM7SUFDRCxrQ0FBVyxHQUFYO1FBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIFRlYWNoZXIge1xuICByZWFkb25seSBmaXJzdE5hbWU6IHN0cmluZztcbiAgcmVhZG9ubHkgbGFzdE5hbWU6IHN0cmluZztcbiAgZnVsbFRpbWVFbXBsb3llZTogYm9vbGVhbjtcbiAgeWVhcnNPZkV4cGVyaWVuY2U/OiBudW1iZXI7XG4gIGxvY2F0aW9uOiBzdHJpbmc7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gIFthdHRyaWJ1dGU6IHN0cmluZ106IGFueTtcbn1cblxuY29uc3QgdGVhY2hlcjM6IFRlYWNoZXIgPSB7XG4gIGZpcnN0TmFtZTogJ0pvaG4nLFxuICBmdWxsVGltZUVtcGxveWVlOiBmYWxzZSxcbiAgbGFzdE5hbWU6ICdEb2UnLFxuICBsb2NhdGlvbjogJ0xvbmRvbicsXG4gIGNvbnRyYWN0OiBmYWxzZSxcbn07XG5cbmNvbnNvbGUubG9nKHRlYWNoZXIzKTtcblxuaW50ZXJmYWNlIERpcmVjdG9ycyBleHRlbmRzIFRlYWNoZXIge1xuICBudW1iZXJPZlJlcG9ydHM6IG51bWJlcjtcbn1cblxuY29uc3QgZGlyZWN0b3IxOiBEaXJlY3RvcnMgPSB7XG4gIGZpcnN0TmFtZTogJ0pvaG4nLFxuICBsYXN0TmFtZTogJ0RvZScsXG4gIGxvY2F0aW9uOiAnTG9uZG9uJyxcbiAgZnVsbFRpbWVFbXBsb3llZTogdHJ1ZSxcbiAgbnVtYmVyT2ZSZXBvcnRzOiAxNyxcbn07XG5jb25zb2xlLmxvZyhkaXJlY3RvcjEpO1xuXG5pbnRlcmZhY2UgcHJpbnRUZWFjaGVyRnVuY3Rpb24ge1xuICAoZmlyc3ROYW1lOiBzdHJpbmcsIGxhc3ROYW1lOiBzdHJpbmcpOiBzdHJpbmc7XG59XG5cbmNvbnN0IHByaW50VGVhY2hlcjogcHJpbnRUZWFjaGVyRnVuY3Rpb24gPSBmdW5jdGlvbiAoZmlyc3ROYW1lOiBzdHJpbmcsIGxhc3ROYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBmaXJzdDogc3RyaW5nID0gZmlyc3ROYW1lLmNoYXJBdCgwKTtcbiAgcmV0dXJuIGAke2ZpcnN0fS4gJHtsYXN0TmFtZX1gO1xufVxuY29uc29sZS5sb2cocHJpbnRUZWFjaGVyKFwiSm9oblwiLCBcIkRvZVwiKSk7XG5cblxuaW50ZXJmYWNlIHN0dWRlbnQge1xuICBmaXJzdE5hbWU6IHN0cmluZztcbiAgbGFzdE5hbWU6IHN0cmluZztcbiAgd29ya09uSG9tZXdvcmsoKTogc3RyaW5nO1xuICBkaXNwbGF5TmFtZSgpOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBzdHVkZW50Q29uc3RydWN0b3Ige1xuICBuZXcoZmlyc3ROYW1lOiBzdHJpbmcsIGxhc3ROYW1lOiBzdHJpbmcpOiBzdHVkZW50O1xufVxuXG5jbGFzcyBTdHVkZW50Q2xhc3MgaW1wbGVtZW50cyBzdHVkZW50IHtcbiAgY29uc3RydWN0b3IocHVibGljIGZpcnN0TmFtZTogc3RyaW5nLCBwdWJsaWMgbGFzdE5hbWU6IHN0cmluZykgeyB9XG4gIHdvcmtPbkhvbWV3b3JrKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFwiQ3VycmVudGx5IHdvcmtpbmdcIjtcbiAgfVxuICBkaXNwbGF5TmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmZpcnN0TmFtZTtcbiAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==