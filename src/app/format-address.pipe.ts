import { PipeTransform, Pipe } from '@angular/core';
interface AddressLike {
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

@Pipe({
  name: 'formatAddress'
})
export class FormatAddressPipe implements PipeTransform {
  transform(addr: AddressLike, param1?: string) {
    return (
      addr.address1 +
      ' ' +
      addr.address2 +
      ', ' +
      addr.state +
      ' ' +
      addr.zip +
      ', ' +
      addr.country
    );
  }
}
