'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Elenco extends Model {
    static boot () {
        super.boot();
        this.addHook('beforeSave', 'ElencoHook.uuid');
      }
    
      static get table () {
        return 'elencos'
      }
    
      static get primaryKey(){
        return 'id';
      }
    
      static get incrementing(){
        return false;
      }
    
    
      id_serie() {
        return this.hasMany('App/Models/Series')
      }

      id_filme() {
        return this.hasMany('App/Models/Filme')
      }
    
      id_ator() {
        return this.hasMany('App/Models/Ator')
      }
}

module.exports = Elenco
