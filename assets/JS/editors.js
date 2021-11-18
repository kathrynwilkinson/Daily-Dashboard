ClassicEditor.create(document.querySelector('#today-editor'))
    .then((editor) => {
        console.log(editor);
    })
    .catch((error) => {
        console.error(error);
    });
ClassicEditor.create(document.querySelector('#tomorrow-editor'))
    .then((editor) => {
        console.log(editor);
    })
    .catch((error) => {
        console.error(error);
    });
