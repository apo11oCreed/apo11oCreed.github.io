$.getJSON('data.json', function(data) {
    var template = "{{#name}} {{name}} {{/name}}skills:<ul>{{#skills}}<li>{{skills}}</li>{{/skills}}</ul>";
    var html = Mustache.render(template, data);
    $('#sampleArea').html(html);
});