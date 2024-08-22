const baseRoute = "http://localhost:3000/api/v1/file-system"
export default {
    get: {route: baseRoute + "/", type: "GET"},
    getFile: {route: baseRoute + "/file", type: "GET"},
    create: {route: baseRoute + "/create", type: "POST"},
    delete: {route: baseRoute + "/", type: "DELETE"},
    rename: {route: baseRoute + "/rename", type: "PUT"},
}