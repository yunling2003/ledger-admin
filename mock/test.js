var express = require('express');
var router = express.Router();

var data = [
  {
    id: 1,
    name: 'Project A schedule review',
    status: 0,
    isnew: false,
    createddate: '2019-12-23T11:23:06Z',
    createdby: 'Leon'
  },
  {
    id: 2,
    name: 'Deploy B to Production',
    status: 1,
    isnew: true,
    createddate: '2019-12-10T17:15:43Z',
    createdby: 'Leon'
  },
  {
    id: 3,
    name: 'Demo meeting Sprint 16',
    status: 2,
    isnew: false,
    createddate: '2019-11-30T09:05:10Z',
    createdby: 'Leon'
  },
  {
    id: 4,
    name: 'Birth day celeration(December)',
    status: 0,
    isnew: true,
    createddate: '2019-12-5T20:11:31Z',
    createdby: 'Leon'
  },
  {
    id: 5,
    name: 'Report project C status',
    status: 1,
    isnew: true,
    createddate: '2019-12-9T10:01:03Z',
    createdby: 'Jack'
  },
  {
    id: 6,
    name: 'Team building activity',
    status: 2,
    isnew: true,
    createddate: '2019-12-8T22:55:44Z',
    createdby: 'Bob'
  },
  {
    id: 7,
    name: 'Microsoft Ignite Summit Shanghai 3/14',
    status: 0,
    isnew: true,
    createddate: '2019-12-24T06:06:18Z',
    createdby: 'Leon'
  },
  {
    id: 8,
    name: 'Veracity product integration pipeline',
    status: 1,
    isnew: true,
    createddate: '2019-12-25T13:12:29Z',
    createdby: 'Leon'
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

router.use('/issue/add', function(req, res) {
  var issue = req.body.issue;
  var maxId = data.map(x => x.id).sort((a,b) => b - a)[0];
  issue.id = maxId + 1;
  data.push(issue);
  return res.json(data);
});

router.use('/issue/delete/:id', function(req, res) {
  var id = req.params['id'];
  data = data.filter((x) => x.id !== parseInt(id));
  return res.json(data);
});

router.use('/issue/status/get', function(req, res) {
  var started = data.filter((x) => x.status === 0).length;
  var inProgress = data.filter((x) => x.status === 1).length;
  var done = data.filter((x) => x.status === 2).length;
  return res.json([started, inProgress, done]);
});

router.use('/issue/new/get', function(req, res) {
  var oldIssue = data.filter((x) => x.isnew === false).length;
  var newIssue = data.filter((x) => x.isnew === true).length;
  return res.json([newIssue, oldIssue]);
});

router.use('/issues/:id', function(req, res) {
  var id = req.params['id'];
  var issue = data.filter((x) => x.id === parseInt(id));
  return res.json(issue);
});

module.exports = router;
