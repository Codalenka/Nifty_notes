import BaseModel from 'feathersjs-redux-model/build/models/base-model'
import feathers from 'feathers-client'

class NoteModel extends BaseModel {
  defaults() {
    return {
      createdAt: Date.now,
      updatedAt: Date.now,
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
    super('note', dispatch, onError);
    this.app.configure(feathers.authentication({
      type: 'local',
      storage: window.localStorage,
    }))
  }
}

const noteboardModel = new NoteModel()

export default noteModel
