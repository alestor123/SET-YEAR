'use strict'
const { execSync } = require('child_process')

module.exports = (username, year, branch, repo,dir) => {
  if (!(username && typeof username === 'string' && username.length > 0)) throw new Error('Please enter a vaild username')
  else if (!(year && typeof year === 'number' && year > 0)) throw new Error('Enter a valid year')
  const time = new Date(year, 0, 1, 0, 0).toString()
  return execSync('git init && git add . &&' + ' GIT_COMMITTER_DATE="' + time + '" git commit -m "' + year + '" --no-edit --date "' + time + '"' + ' && git push -u ' + 'https://github.com/' + username + '/' + (repo || year) + '.git ' + (branch || 'main'),{cwd: dir || './'}).toString()
}
