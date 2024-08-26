<?php  
/**  
 * @file  
 * Contains Drupal\brown_d8react_integration\Form\SettingsForm.  
 */  
namespace Drupal\brown_d8react_integration\Form;  

use Drupal\Core\Form\ConfigFormBase;  
use Drupal\Core\Form\FormStateInterface;  

class SettingsForm extends ConfigFormBase {  
  /**  
   * {@inheritdoc}  
   */  
  protected function getEditableConfigNames() {  
    return [  
      'brown_d8react_integration.adminsettings',  
    ];  
  }  

  /**  
   * {@inheritdoc}  
   */  
  public function getFormId() {  
    return 'brown_d8react_integration_adminsettings_form';  
  }  

    /**  
   * {@inheritdoc}  
   */  
  public function buildForm(array $form, FormStateInterface $form_state) {  
    $config = $this->config('brown_d8react_integration.adminsettings');  

    $current_path = \Drupal::service('extension.path.resolver')->getPath('module', 'brown_d8react_integration');
    $apps = array_diff(scandir($current_path.'/apps/sitewide'), array('..', '.'));
    $options = [];
    $options['none'] = "No app selected";
    foreach ($apps as $app) {
        $appName = pathinfo($current_path.'/apps/sitewide/'.$app, PATHINFO_FILENAME);
        $appNameNice = ucwords(str_replace("-", " ", $appName));
        $options[$appName] = $appNameNice;
    }
    $form['brown_d8react_integration_sitewide_app'] = [  
      '#type' => 'select',  
      '#title' => $this->t('Sitewide Apps'),  
      '#description' => $this->t('Select an app to appear on all non-admin site pages.'),
      '#options' => $options,
      '#default_value' => $config->get('sitewide_app'),
    ];  

    return parent::buildForm($form, $form_state);  
  }  

  /**  
   * {@inheritdoc}  
   */  
  public function submitForm(array &$form, FormStateInterface $form_state) {  
    parent::submitForm($form, $form_state);  

    $this->config('brown_d8react_integration.adminsettings')  
      ->set('sitewide_app', $form_state->getValue('brown_d8react_integration_sitewide_app'))  
      ->save();  
  }  
}  