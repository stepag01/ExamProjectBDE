import assert from 'assert';
import { Selector } from "testcafe"

fixture`Todolist test 1`
    .page("./index.html");

test("Add task", async t => {
    await t
    //Pre-assertion
        .expect(Selector("#taskList li").count).eql(0)

    await t
    //Arrange
        .typeText(Selector("#task"), "Call mom")
    
    await t
    //Act
        .click("#btn")


    //Assert (That there is 1 element with the class #taskList)
    const todoItemCount = await Selector('#taskList').count;
    assert.equal(todoItemCount, 1 , 'Expected 1 element with class #taskList');
});




fixture`Todolist test 2`
    .page("./index.html");

test("Add another task and delete the old", async t => {
    await t
    // Pre-assertion
    .expect(Selector("#taskList").count).eql(1)
    
    // Arrange
    .typeText(Selector("#task"), "Write in journal")
    .click("#btn");


    // Act
    const deleteButton = Selector("#taskList li button");
    await t.click("button");

    // Assert (Check the count of individual list items)
    const todoItemCount = await Selector("#taskList").count;
    assert.equal(todoItemCount, 1, 'Expected 1 element with class #taskList');
});