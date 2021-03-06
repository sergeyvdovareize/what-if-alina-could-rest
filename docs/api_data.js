define({ "api": [
  {
    "type": "get",
    "url": "/signin",
    "title": "Log in",
    "group": "Auth",
    "name": "Signin",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User's password</p>"
          }
        ]
      }
    },
    "filename": "app/controllers/auth.controller.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/signup",
    "title": "New user registration",
    "group": "Auth",
    "name": "Signup",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "fname",
            "description": "<p>User's first name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lname",
            "description": "<p>User's last name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User's password</p>"
          }
        ]
      }
    },
    "filename": "app/controllers/auth.controller.js",
    "groupTitle": "Auth"
  },
  {
    "type": "delete",
    "url": "/tasks/:id",
    "title": "Delete existing task",
    "group": "Tasks",
    "name": "Detele_task",
    "version": "0.1.0",
    "permission": [
      {
        "name": "authorized user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "id",
            "description": "<p>Task ID</p>"
          }
        ]
      }
    },
    "filename": "app/controllers/task.controller.js",
    "groupTitle": "Tasks"
  },
  {
    "type": "post",
    "url": "/tasks",
    "title": "Create new task",
    "group": "Tasks",
    "name": "New_task",
    "version": "0.1.0",
    "permission": [
      {
        "name": "authorized user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Task title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>Task description</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "dueDate",
            "description": "<p>Task due date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "low",
              "normal",
              "high"
            ],
            "optional": true,
            "field": "proiroty",
            "defaultValue": "normal",
            "description": "<p>Task prority</p>"
          }
        ]
      }
    },
    "filename": "app/controllers/task.controller.js",
    "groupTitle": "Tasks"
  },
  {
    "type": "get",
    "url": "/tasks",
    "title": "Get task list",
    "group": "Tasks",
    "name": "Task_list",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "title",
              "description",
              "dueDate",
              "priority"
            ],
            "optional": true,
            "field": "sort",
            "description": "<p>Field to sort by</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "asc",
              "desc"
            ],
            "optional": true,
            "field": "asc",
            "defaultValue": "asc",
            "description": "<p>Sorting direction</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "defaultValue": "10",
            "description": "<p>Items per page</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": true,
            "field": "author",
            "description": "<p>Author's id to filter by</p>"
          }
        ]
      }
    },
    "filename": "app/controllers/task.controller.js",
    "groupTitle": "Tasks"
  },
  {
    "type": "put",
    "url": "/tasks/:id",
    "title": "Update existing task",
    "group": "Tasks",
    "name": "Update_task",
    "version": "0.1.0",
    "permission": [
      {
        "name": "authorized user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "id",
            "description": "<p>Task ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Task title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>Task description</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "dueDate",
            "description": "<p>Task due date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "proiroty",
            "description": "<p>Task prority</p>"
          }
        ]
      }
    },
    "filename": "app/controllers/task.controller.js",
    "groupTitle": "Tasks"
  }
] });
