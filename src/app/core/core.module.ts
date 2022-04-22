import { NgModule } from '@angular/core'
import { environment } from 'src/environments/environment'
import { AngularFireModule } from '@angular/fire/compat'

@NgModule({
    imports: [AngularFireModule.initializeApp(environment.firebaseConfig)],
})
export class CoreModule {}
