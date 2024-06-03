import { Observable } from 'rxjs';
import { ChefService } from '../../service/chef.service';
import { IChef } from '../../interface/chef.interface';
import { GenericTableDataSource } from '../../sherd/generic-table-datasource';

export class ChefsTableDataSource extends GenericTableDataSource<IChef> {

  constructor(private chefService: ChefService) {
    super(chefService);
  }

  fetchData(): Observable<IChef[]> {
    return this.chefService.getAllChefs();
  }
}