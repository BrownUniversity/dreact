<?php

namespace Drupal\brown_d8react_integration\Plugin\Field\FieldWidget;

use Drupal\Component\Utility\Color;
use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\Field\WidgetBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Plugin implementation of the 'keyvalue_widget' widget.
 *
 * @FieldWidget(
 *   id = "brown_d8react_integration_keyvalue_widget",
 *   label = @Translation("DReact KeyValue Widget"),
 *   field_types = {
 *     "brown_d8react_integration_keyvalue"
 *   }
 * )
 */
class DReactKeyValueWidget extends WidgetBase {
  /**
   * {@inheritdoc}
   */
  public function formElement(FieldItemListInterface $items, $delta, array $element, array &$form, FormStateInterface $form_state) {
    $key = isset($items[$delta]->key) ? $items[$delta]->key : '';
    $value = isset($items[$delta]->value) ? $items[$delta]->value : '';
    $element = [];

    $element['key'] = array(
      '#type' => 'textfield',
      '#title' => t('Key'),
      '#description' => t('Key of pair'),
      '#default_value' => t($key),
    );

    $element['value'] = array(
      '#type' => 'textfield',
      '#title' => t('Value'),
      '#description' => t('Value of pair'),
      '#default_value' => t($value),
    );

    return $element;
  }

}

