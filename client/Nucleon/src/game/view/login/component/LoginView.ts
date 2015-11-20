/**
 * Created by Administrator on 2015/7/8.
 */
module game.view.login.component
{
    export class LoginView extends egret.Sprite
    {
        private _uiLayer: UILayer;
        
          public constructor()
          {
                var self:LoginView = this;
                  
                super();
                  
                
                this._uiLayer = new UILayer();
                game.manager.layer.LayerManager.getInstance().getGuiLayer().addElement(this._uiLayer);
                
                this._uiLayer.onStart = this.startHandler;
                this._uiLayer.onStartThis = this;

                
          }
          
          public dispose():void
          {
                game.manager.layer.LayerManager.getInstance().getGuiLayer().removeElement(this._uiLayer);
               this._uiLayer.dispose();
          }
          
          private startHandler():void
          {
              this.dispatchEvent(new event.LoginEvent(event.LoginEvent.START));
          }
    }
}