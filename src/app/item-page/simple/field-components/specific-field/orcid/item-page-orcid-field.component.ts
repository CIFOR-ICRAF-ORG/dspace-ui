import { Component, Input } from "@angular/core";

import { Item } from "../../../../../core/shared/item.model";
import { ItemPageFieldComponent } from "../item-page-field.component";

@Component({
  selector: "ds-item-page-orcid-field",
  styleUrls: ["item-page-orcid-field.component.scss"],
  templateUrl: "./item-page-orcid-field.component.html",
})
/**
 * This component renders an ORCID identifier as a name, icon, and link.
 * It expects 4 parameters: The item, a separator, the metadata keys and an i18n key
 */
export class ItemPageOrcidFieldComponent extends ItemPageFieldComponent {
  /**
   * The item to display metadata for
   */
  @Input() item: Item;

  /**
   * Separator string between multiple values of the metadata fields defined
   * @type {string}
   */
  @Input() separator: string;

  /**
   * Fields (schema.element.qualifier) used to render their values.
   */
  @Input() fields: string[];

  /**
   * Label i18n key for the rendered metadata
   */
  @Input() label: string;
}
