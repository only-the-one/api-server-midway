import { Provide } from '@midwayjs/decorator';
import idmapEntity from '../entity/idmap';
import { InjectEntityModel } from '@midwayjs/orm';
import { Repository } from 'typeorm';

@Provide()
export class IdmapService {
  @InjectEntityModel('idmap')
  idmapModel: Repository<idmapEntity>;

  async GetAll(query: any): Promise<any> {
    return this.idmapModel.find(query);
  }

  async Create(data: any) {
    const idmap = new idmapEntity();
    Object.assign(idmap, data);
    const result = await this.idmapModel.save(idmap);
    return result;
  }
}
