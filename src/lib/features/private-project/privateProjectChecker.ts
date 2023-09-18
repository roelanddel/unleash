import { IUnleashStores } from '../../types';
import { IPrivateProjectStore } from './privateProjectStoreType';
import { IPrivateProjectChecker } from './privateProjectCheckerType';

export class PrivateProjectChecker implements IPrivateProjectChecker {
    private privateProjectStore: IPrivateProjectStore;

    constructor({
        privateProjectStore,
    }: Pick<IUnleashStores, 'privateProjectStore'>) {
        this.privateProjectStore = privateProjectStore;
    }

    async getUserAccessibleProjects(userId: number): Promise<string[]> {
        return this.privateProjectStore.getUserAccessibleProjects(userId);
    }

    async hasAccessToProject(
        userId: number,
        projectId: string,
    ): Promise<boolean> {
        return (await this.getUserAccessibleProjects(userId)).includes(
            projectId,
        );
    }
}
