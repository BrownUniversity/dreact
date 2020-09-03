<?php

namespace Drupal\brown_d8react_integration\Plugin\Field\FieldFormatter;

use Drupal\Core\Field\FormatterBase;
use Drupal\Core\Field\FieldItemListInterface;

/**
 * Plugin implementation of the 'keyvalue_formatter' formatter.
 *
 * @FieldFormatter(
 *   id = "brown_d8react_integration_keyvalue_formatter",
 *   module = "brown_d8react_integration",
 *   label = @Translation("Brown DReact"),
 *   field_types = {
 *     "brown_d8react_integration_keyvalue"
 *   }
 * )
 */
class DReactKeyValueFormatter extends FormatterBase {

  /**
   * {@inheritdoc}
   */
  public function viewElements(FieldItemListInterface $items, $langcode) {
    $element = [];
    $data = [];
    foreach ($items as $delta => $item) {
      $data[$item->key] = $item->value;
    }
    if($data) {
      $element[0] = ['#markup' => json_encode($data)];
    }
    return $element;
  }

}

