import BaseModel from 'feathersjs-redux-model/build/models/base-model'
import feathers from 'feathers-client'

class NoteboardModel extends BaseModel {
  defaults() {
    return {
      notes: [],
      categories: [],
      // Or something else for UserId?
      UserId: null,
    };
  }

  findParams() {
    return {
      query: {
        $sort: { createdAt: -1 },
        $limit: 12
      }
    };
  }

  constructor(dispatch, onError) {
    super('noteboard', dispatch, onError);
    this.app.configure(feathers.authentication({
      type: 'local',
      storage: window.localStorage,
    }))
  }
}

const noteboardModel = new NoteboardModel()

export default noteboardModel
