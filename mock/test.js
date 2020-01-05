var express = require('express');
var router = express.Router();

var data = [
  {
    id: 1,
    name: 'Project A schedule review',
    status: 0,
    isNew: true,
    createdDate: '2019-12-23',
    createdBy: 'Leon'
  },
  {
    id: 2,
    name: 'Deploy B to Production',
    status: 1,
    isNew: true,
    createdDate: '2019-12-10',
    createdBy: 'Leon'
  },
  {
    id: 3,
    name: 'Demo meeting Sprint 16',
    status: 2,
    isNew: true,
    createdDate: '2019-11-30',
    createdBy: 'Leon'
  },
  {
    id: 4,
    name: 'Birth day celeration(December)',
    status: 0,
    isNew: true,
    createdDate: '2019-12-5',
    createdBy: 'Leon'
  },
  {
    id: 5,
    name: 'Report project C status',
    status: 1,
    isNew: true,
    createdDate: '2019-12-9',
    createdBy: 'Jack'
  },
  {
    id: 6,
    name: 'Team building activity',
    status: 2,
    isNew: true,
    createdDate: '2019-12-8',
    createdBy: 'Bob'
  },
  {
    id: 7,
    name: 'Microsoft Ignite Summit Shanghai 3/14',
    status: 0,
    isNew: true,
    createdDate: '2019-12-24',
    createdBy: 'Leon'
  },
  {
    id: 8,
    name: 'Veracity product integration pipeline',
    status: 1,
    isNew: true,
    createdDate: '2019-12-25',
    createdBy: 'Leon'
  }
];

router.use('/issues', function(req, res) {
  return res.json(data);
});

router.use('/issue/update', function(req, res) {
  var issue = req.body.issue;
  data = data.map((x) => {
    if (x.id === issue.id) {
      return Object.assign({}, x, issue);
    }
    return x;
  });

  return res.json(data);
});

router.use('/issue/:id', function(req, res) {
  var id = req.params['id'];
  var issue = data.filter((x) => x.id === parseInt(id));
  return res.json(issue);
});

module.exports = router;
