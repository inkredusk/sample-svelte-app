#### Sample app using Svelte

Demo contains: 
  * Configuration for ESLint and Prettier
  * Configuration for husky
  * Configuration for Commit Lint
 
#### Installation

```sh
yarn install
```

#### To test commit lint
```sh
echo "this would fail" | yarn commitlint
echo "docs: husky config" | yarn commitlint
```

#### To test ESlint using Hooks
```sh
yarn pre-commit
```

#### To test Prettier 

```sh
yarn format
```

#### Reference links

* https://remarkablemark.org/blog/2019/05/29/git-husky-commitlint/

* https://typicode.github.io/husky/#/?id=migrate-from-v4-to-v7

* https://www.joshuacolvin.net/git-hooks-with-husky-and-lint-staged/

* https://codechips.me/eslint-svelte-typescript/
