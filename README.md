# Typescript Project References Yarn Workspace Sync

This project demonstrates the use of the utility [utils-typescript-references](https://github.com/goldstack/goldstack/tree/master/workspaces/templates-lib/packages/utils-typescript-references#readme).

This project contains seven packages:

```
packages/app-nextjs
packages/app-nextjs-bootstrap
packages/email-send
packages/lambda-express
packages/lambda-go-gin
packages/s3
packages/static-website-aw
```

And there are two inter-project dependencies between packages:

```
app-next-bootstrap -> lambda-express
lambda-express -> s3
```

Using the `utils-typescript-references` tool, the [TypeScript project references](https://www.typescriptlang.org/docs/handbook/project-references.html) in the respective `tsconfig.json` files for the packages are updated, for example:


[app-nextjs-bootstrap/tsconfig.json](https://github.com/mxro/typescript-project-references-yarn-workspace-sync/blob/master/packages/app-nextjs-bootstrap/tsconfig.json#L23)

You can add or remove dependencies between the packages in this project by using `yarn`. For instance, to establish a reference between `lambda-express` and `email-send` do the following

```
cd packages/lambda-express
yarn add email-send
```

Following this, update the project references:

```
cd ../..
yarn fix-project-references
```

This will update the `tsconfig.json` for the `lambda-express` package and include the references to the `email-send` package.

This project was created using the [Goldstack Project Builder](https://goldstack.party). For more background around syncing project references and Yarn workspaces, also see the following blog post: 

