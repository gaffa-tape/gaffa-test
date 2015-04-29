var test = require('tape'),
    Gaffa = require('gaffa'),
    Text = require('gaffa-text'),
    Container = require('gaffa-container');

test('clone text', function (t) {
    t.plan(1);
    var viewItem = new Text(),
        viewItemJSON = JSON.stringify(viewItem),
        pojo = JSON.parse(viewItemJSON);

    t.deepEqual(pojo, {_type:'text'});
    t.end();
});