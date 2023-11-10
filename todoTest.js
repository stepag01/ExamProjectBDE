import assert from 'assert';
import { Selector } from "testcafe"

fixture`Todolist test 1`
    .page("./index.html");

test("Add task", async t => {
    //Pre-assertion
    await t.expect(Selector("#taskList li").count).eql(0);

    // Arrange
    const taskInput = Selector('#task');
    const addButton = Selector('#btn');
    const newTask = 'Call mom';

    // Act
    await t.typeText(taskInput, newTask);
    await t.click(addButton);

    // Assert
    await t
    const todoItemCount = await Selector("#taskList").count;
    assert.equal(todoItemCount, 1, 'Expected 1 element with class #taskList');
});




fixture`Todolist test 2`
    .page("./index.html");

test("Add another task and delete the old", async t => {
    // Pre-assertion
    await t
    .expect(Selector("#taskList").count).eql(1)
   
    // Arrange
    const taskInput = Selector('#task');
    const addButton = Selector('#btn');
    const newTask = 'Write in journal';

    // Act
    await t.typeText(taskInput, newTask);
    await t.click(addButton);

    const deleteButton = Selector('.deleteButton');
    await t.click(deleteButton);

    // Assert
    const taskList = Selector('#taskList');
    const addedTask = taskList.find('li').withText(newTask);

    const todoItemCount = await taskList.count;
    await t.expect(todoItemCount).eql(1, 'Expected 1 element with class #taskList');
});