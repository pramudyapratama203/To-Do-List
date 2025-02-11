$(document).ready(function() {
    $('#add').click(function() {
        var task = $('#task').val();
        if (task) {
            $('#todo-list').append('<li><span class="task-text">' + task + '</span><div class="button-group"><button class="complete">Complete</button><button class="delete">Delete</button></div></li>');
            $('#task').val('');
        }
    });
    
    $(document).on('click', '.delete', function() {
        $(this).closest('li').remove();
    });

    $(document).on('click', '.complete', function() {
        $(this).closest('li').toggleClass('completed');
    });
});