var test = require('tape'),
    Gaffa = require('gaffa'),
    Text = require('gaffa-text'),
    Container = require('gaffa-container');

test('JSONify plain text', function (t) {
    t.plan(1);
    var viewItem = new Text(),
        viewItemJSON = JSON.stringify(viewItem),
        pojo = JSON.parse(viewItemJSON);

    t.deepEqual(pojo, {_type:'text'});
    t.end();
});

test('JSONify text with value binding', function (t) {
    t.plan(1);
    var viewItem = new Text(),
        viewItemJSON,
        pojo;

    viewItem.text.binding = '[thing]';

    viewItemJSON = JSON.stringify(viewItem),
    pojo = JSON.parse(viewItemJSON);

    t.deepEqual(pojo, {_type:'text', text:{binding:'[thing]'}});
    t.end();
});

test('JSONify container with child', function (t) {
    t.plan(1);
    var viewItem = new Container(),
        text = new Text(),
        viewItemJSON,
        pojo;

    viewItem.views.content.add(text);

    viewItemJSON = JSON.stringify(viewItem),
    pojo = JSON.parse(viewItemJSON);

    t.deepEqual(pojo, {_type:'container', views:{content:[{_type:'text'}]}});
    t.end();
});